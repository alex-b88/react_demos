
export interface IPost {
    id: number,
    title: string,
    body: string,
    tags: number[],
    reactions: {
        likes: number,
        dislikes: number
    },
    views: number,
    userId: number
}