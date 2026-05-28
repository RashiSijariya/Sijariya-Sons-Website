package org.ss.sijariyasons.service;

import org.springframework.stereotype.Service;
import org.ss.sijariyasons.model.Product;
import org.ss.sijariyasons.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    public Product addProduct(Product product) {
        return repository.save(product);
    }

    public Product updateProduct(Long id, Product product) {
        Product existing = repository.findById(id).orElseThrow();

        existing.setName(product.getName());
        existing.setDescription(product.getDescription());
        existing.setPrice(product.getPrice());
        existing.setImageUrl(product.getImageUrl());
        existing.setCategory(product.getCategory());

        return repository.save(existing);
    }

    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
}
