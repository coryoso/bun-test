import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CacheModule.register({ isGlobal: true, ttl: 60 * 60 * 1000 })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
