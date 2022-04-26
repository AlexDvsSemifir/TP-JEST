export class Commentaire {
  public tableau: string[] = [];

  public addComment(comment: string): string {
    comment = comment.trim();
    if (!comment || comment.length > 30) {
      throw Error;
    }
    return comment;
  }
}
