export interface IComment {
  status: boolean;
  comment_ID?: string;
  review?: string;
  title?: string;
  rating?: string;
}

// 'id'         => $comment->comment_ID,
// 'title'        => $title,
// 'content'    => $comment->comment_content,
// 'rating'    => $rating,
// 'member'    => $this->get_member($comment->user_id)
export interface IMember {
  id: number;
  name: string;
  avatar: string;
  sub: string;
}

export interface ICourseReview {
  id: number;
  title: string;
  content: string;
  rating: number;
  member: IMember;
  date: string;
}
