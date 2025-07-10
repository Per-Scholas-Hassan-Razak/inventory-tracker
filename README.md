# Inventory Tracker

A simple object-oriented inventory management prototype built with TypeScript. This system manages both physical and digital products, calculates applicable taxes based on product type, and demonstrates core OOP principles like inheritance, encapsulation, and polymorphism.

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Per-Scholas-Hassan-Razak/inventory-tracker.git
cd inventory-tracker
```

---

## Install Dependencies
```bash
npm install

npx tsc

node src/main.js
```

---

## Features

- **Object-oriented design** using TypeScript  
-  Models both **physical and digital products**  
-  Calculates **price including tax**  
-  Demonstrates **inheritance, encapsulation, and polymorphism**  
-  **Modular structure** for easy maintenance  

---

## Reflection

### How does TypeScript enforce type safety in this object-oriented program?

TypeScript requires explicit types for properties and method signatures, catching errors at compile time and preventing invalid usage.

### How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

Both product types reuse shared logic from the `Product` class (e.g., name, price, display methods), reducing redundancy and improving maintainability.

### What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

They protect internal state, enforce validation logic, and expose only necessary behavior through controlled access (e.g., getters/setters).

### If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

Polymorphism allows `SubscriptionProduct` to override shared methods like `getPriceWithTax()` while still being treated as a `Product`, enabling clean reuse in loops or utilities.