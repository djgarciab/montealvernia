

export interface YoutubeResponse {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    pageInfo:      PageInfo;
    items:         Item[];
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: Video;
}

export enum ItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Video {
    publishedAt:  Date;
    channelId:    ChannelID;
    title:        string;
    description:  string;
    thumbnails:   Thumbnails;
    channelTitle: ChannelTitle;
    playlistId:   PlaylistID;
    position:     number;
    resourceId:   ResourceID;
}

export enum ChannelID {
    UCv85NIROLKddHa0FBATwTzw = "UCv85NiROLKddHa0fBATwTzw",
}

export enum ChannelTitle {
    VictorRoblesWEB = "Victor Robles WEB",
}

export enum PlaylistID {
    UUv85NIROLKddHa0FBATwTzw = "UUv85NiROLKddHa0fBATwTzw",
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres:   Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}
