import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  async getCommentMainPage(): Promise<string> {
    return 'comment main page';
  }
}
