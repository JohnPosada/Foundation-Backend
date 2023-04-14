import { Module } from '@nestjs/common';
import { FoundationService } from './foundation.service';
import { FoundationController } from './foundation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foundation } from './entities/foundation.entity';
import { MemberModule } from 'src/member/member.module';

@Module({
  imports: [TypeOrmModule.forFeature([Foundation]), MemberModule],
  controllers: [FoundationController],
  providers: [FoundationService],
})
export class FoundationModule {}
