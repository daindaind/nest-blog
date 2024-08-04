import { Controller, Get } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/main')
  async getCommentMainPage(): Promise<string> {
    const res = await this.commentService.getCommentMainPage();

    return res;
  }
}
