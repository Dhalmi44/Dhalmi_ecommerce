<?php
include 'dbcon.php';

$category = $_POST['category'] ?? '';

if ($category) {
    $query = "SELECT product_name, product_picture, product_specs, description FROM products WHERE category = ?";
    $stmt = $connection->prepare($query);
    $stmt->bind_param('s', $category);
    $stmt->execute();
    $result = $stmt->get_result();

    $products = [];

    while ($row = $result->fetch_assoc()) {
        $products[] = [
            'product_name' => $row['product_name'],
            'product_picture' => $row['product_picture'],
            'product_specs' => $row['product_specs'],
            'description' => $row['description'],  // Add a description field
        ];
    }

    $stmt->close();
    $connection->close();

    header('Content-Type: application/json');
    echo json_encode($products);
}
?>
