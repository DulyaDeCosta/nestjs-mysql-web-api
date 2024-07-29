import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeCategory } from './recipe-category.entity';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeCategory])],
  providers: [RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
