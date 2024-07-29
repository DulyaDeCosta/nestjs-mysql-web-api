import { Controller, Get, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeCategory } from './recipe-category.entity';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get('search')
  async searchRecipe(@Query('name') name: string): Promise<RecipeCategory[]> {
    return this.recipeService.findRecipe(name);
  }
}
