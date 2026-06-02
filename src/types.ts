/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  image: string;
  category: string;
  description: string;
  role: string;
  deliverables: string[];
  color: string;
  textColor: string;
  hasDetails?: boolean;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface FeedItem {
  id: string;
  image: string;
  alt: string;
  caption: string;
  tag: string;
  ratio: string;
}

export interface PressItem {
  id: string;
  publisher: string;
  date: string;
  title: string;
  url: string;
}
