// app.test.ts
import request from "supertest";
import app from "../app";

describe("Test the root path", () => {
	test("It should respond with \"Hello, Express TypeScript World!\"", async () => {
		const response = await request(app).get("/");
		expect(response.text).toBe("Hello, Express TypeScript World!");
		expect(response.status).toBe(200);
	});
});
