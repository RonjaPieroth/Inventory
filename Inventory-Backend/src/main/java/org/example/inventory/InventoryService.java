package org.example.inventory;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class InventoryService {
    private InventoryRepository inventoryRepository;

    List<Inventory> getAllInventories() {
        return inventoryRepository.findAll();
    }

    Optional<Inventory> findInventoryById(Long id) {
        return inventoryRepository.findById(id);
    }

    Inventory saveInventory(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    void deleteInventory(Long id) {
        inventoryRepository.deleteById(id);
    }
}
