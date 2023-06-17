<?php
/*
Plugin Name: Custom Products
Description: Adds a custom products functionality to WordPress.
*/

// Добавление пункта меню "Products" после "Posts"
function custom_products_menu()
{
    add_menu_page(
        'Products',
        'Products',
        'manage_options',
        'custom-products',
        'custom_products_page',
        'dashicons-cart',
        26
    );
}
add_action('admin_menu', 'custom_products_menu');

// Страница ввода данных о продукте
function custom_products_page()
{
    if (isset($_POST['submit'])) {
        // Обработка данных при отправке формы
        $title = sanitize_text_field($_POST['title']);
        $price = floatval($_POST['price']);

        global $wpdb;
        $table_name = $wpdb->prefix . 'products';

        $wpdb->insert(
            $table_name,
            array(
                'title' => $title,
                'price' => $price
            )
        );
        echo '<div class="notice notice-success"><p>Product added successfully.</p></div>';
    }
    ?>
    <div class="wrap">
        <h1>Add Product</h1>
        <form method="post">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required><br><br>
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" step="0.01" required><br><br>
            <input type="submit" name="submit" value="Submit" class="button button-primary">
        </form>
    </div>
    <?php
}

// Создание REST API эндпоинта
function custom_products_rest_api()
{
    register_rest_route('custom-products/v1', 'products', array(
        'methods' => 'GET',
        'callback' => 'custom_products_rest_api_callback',
    ));
}
add_action('rest_api_init', 'custom_products_rest_api');

// Обработка запроса REST API
function custom_products_rest_api_callback($request)
{
    global $wpdb;
    $table_name = $wpdb->prefix . 'products';

    $results = $wpdb->get_results("SELECT title, price FROM $table_name");

    $data = array();
    foreach ($results as $result) {
        $data[] = array(
            'title' => $result->title,
            'price' => $result->price
        );
    }

    return $data;
}
