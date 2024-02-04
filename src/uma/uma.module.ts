import { Module } from '@nestjs/common';
import { UmaController } from './uma.controller';
import { UmaService } from './uma.service';

@Module({
  controllers: [UmaController],
  providers: [UmaService]
})
export class UmaModule {}
