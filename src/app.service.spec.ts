import { Test, TestingModule } from "@nestjs/testing"
import { AppService } from "./app.service"

describe("SimpleUserRepository", async () => {
	let service: AppService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AppService,
			],
		})
			.compile()

		service = module.get<AppService>(AppService)
	})

	it("should be defined", async () => {
		expect(service).toBeDefined()
	})
})
