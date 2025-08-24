import { describe, it, expect } from "vitest";
import supertest from "supertest"; 
import app from "./app.js"; 

const request = supertest(app);

describe("/test endpoint", () => {
  it("Debe devolver 'Hola Mundo'", async () => {
    const response = await request.get("/");
    const body = JSON.parse(response.text);
    expect(response.status).toBe(200);
    expect(body.message).toBe("¡Hola, Mundo!");
  });
 });