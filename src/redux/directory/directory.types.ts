export type DirectoryStateType = {
  sections: Array<{
    title: string;
    imageUrl: string;
    size?: string;
    id: number;
    linkUrl: string;
  }>;
};

interface EmptyAction {
  type: any;
}

export type DirectoryActionTypes = EmptyAction;
