/* eslint-disable prettier/prettier */

import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  offset?: number;
}
