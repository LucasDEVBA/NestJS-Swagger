import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do Framework NestJS',
      description: 'Fundamentos do Framework NestJS',
      tags: ['NodeJS', 'NestJS'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCreateCourseDto: any) {
    const existingCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    this.courses[existingCourse] = updateCreateCourseDto;
  }

  remove(id: string) {
    const existingCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (existingCourse >= 0) {
      this.courses.splice(existingCourse, 1);
    }
  }
}