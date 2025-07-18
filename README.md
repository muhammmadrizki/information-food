# Information API of Palembang Traditional Food

## REST API Specification

| Endpoint     | HTTP   | Description        | Done |
| ------------ | ------ | ------------------ | ---- |
| `/foods`     | GET    | Get all foods      | ✅   |
| `/foods/:id` | GET    | Get foods by id    | ✅   |
| `/foods`     | POST   | Add new foods      | ✅   |
| `/foods`     | DELETE | Delete all foods   | ✅   |
| `/foods/:id` | DELETE | Delete foods by id | ✅   |
| `/foods/:id` | PATCH  | Patch foods by id  | ✅   |
| `/foods/:id` | PUT    | Update foods by id | ✅   |

## ERD DIAGRAM

![ERD Diagram](/assets/information-food.png)
[ERD Diagram] (https://dbdiagram.io/d/686fc3c3f413ba3508434693)

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000
