import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface ICoursePreview {
  title: string;
  description?: string;
  author: string;
  avatar: string;
  banner: string | StaticImageData;
  duration: string;
  category?: string;
  tag: string;
  small?: boolean;
}
export type TCategoryProps = {
  title: string;
  courses: number;
  image: string | StaticImageData | StaticImport;
};

export interface ICategoryPreview {
  title: string;
  courses: ICoursePreview[];
}
