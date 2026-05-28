package org.ss.sijariyasons.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.ss.sijariyasons.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
