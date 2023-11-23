import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listing Courses';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Course #${id}`;
  }
}
