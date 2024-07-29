import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recipe_categories') // This specifies the table name
export class RecipeCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: true })
  category: string;

  @Column({ length: 100, nullable: true })
  recipe_name: string;

  @Column('text')
  ingredients: string;

  @Column({ length: 50, nullable: true })
  prep_time: string;
}
