export interface SuggestionList {
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  id: {
    videoId: string;
  };
}
