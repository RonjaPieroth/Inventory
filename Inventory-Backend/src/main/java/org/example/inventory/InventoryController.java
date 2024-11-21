package org.example.inventory;


import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin({"http://localhost:4200"})
@RestController
@AllArgsConstructor
@RequestMapping("/inventory")
public class InventoryController {
    private InventoryService inventoryService;

    @GetMapping
    ResponseEntity<List<Inventory>> getInventories() {
        return ResponseEntity.ok(inventoryService.getAllInventories());
    }

    @GetMapping("/{id}")
    ResponseEntity<Inventory> getInventoryById(@PathVariable Long id) {
        return inventoryService.findInventoryById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    ResponseEntity<Inventory> createInventory(@RequestBody @Valid Inventory inventory) {
        if (inventory.getId() != null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(inventoryService.saveInventory(inventory));
    }

    @PutMapping
    ResponseEntity<Inventory> modifyInventory(@RequestBody @Valid Inventory inventory) {
        if (inventory.getId() == null) {
            return ResponseEntity.badRequest().build();
        }
        if (inventoryService.findInventoryById(inventory.getId()).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(inventoryService.saveInventory(inventory));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteInventory(@PathVariable Long id) {
        inventoryService.deleteInventory(id);
        return ResponseEntity.ok().build();
    }

}
