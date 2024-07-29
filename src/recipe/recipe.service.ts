import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeCategory } from './recipe-category.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(RecipeCategory)
    private recipeRepository: Repository<RecipeCategory>,
  ) {}

  async findRecipe(name: string): Promise<RecipeCategory[]> {
    return this.recipeRepository.find({
      where: { recipe_name: name },
    });
  }
}