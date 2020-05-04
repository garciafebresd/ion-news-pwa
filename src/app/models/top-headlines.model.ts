
import { Article } from './article.model';

export interface TopHeadlines {
    status: string;
    totalResults: number;
    articles: Article[];
}