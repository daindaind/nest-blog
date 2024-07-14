import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') // 경로가 user
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @를 쓰는 아이가 데코레이터
  // 아래 함수인 getUserMainPage를 꾸며준다.
  // get 요청이 들어오면 서비스 함수가 실행된다.
  @Get() // GET (/user)
  async getISerMainPage(): Promise<string> {
    const res = await this.userService.getUserMainPage();

    return res;
  }

  // @Get('/info') // GET (/user/info)
  // async getUserInfo(
  //   @Query('name') name: string, // @Query('name')의 name: URL에 있는 실제 query key 값
  //   @Query('age') age: string,
  // ): Promise<any> {
  //   return {
  //     name,
  //     age,
  //   };
  // }

  // /user/info 경로로 Get 요청시 함수가 실행된다.
  @Get('/info')
  async getUserInfo(
    @Query('name') name: string,
    @Query('age') age: string,
  ): Promise<any> {
    return {
      name,
      age,
    };
  }

  // @Get('/info/:name/age/:age') // GET (/user/info)
  // async getUserInfo(
  //   @Param('name') name: string,
  //   @Param('age') age: string,
  // ): Promise<any> {
  //   return `지금은 Params을 테스트 중이고, name은 ${name}이고, age는 ${age}입니다.`;
  // }

  @Get('/name/:name/age/:age')
  async paramTest(
    @Param('name') name: string,
    @Param('age') age: string,
  ): Promise<string> {
    return `지금은 Param을 테스트 중이고, name: ${name}, age: ${age} 입니다.`;
  }

  @Post()
  async bodyTest(@Body() body: any): Promise<any> {
    return `Body test \
      body.name: ${body.name} \
      body.age: ${body.age}
    `;
  }
}
