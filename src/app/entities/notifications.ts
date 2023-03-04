export interface INotification {
  recipientId: string;
  content: string;
  categories: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: INotification;

  constructor(props: INotification) {
    this.props = props;
  }

  public set content(content: string) {
    if (content.length < 5) {
      throw new Error();
    }
    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }
}
