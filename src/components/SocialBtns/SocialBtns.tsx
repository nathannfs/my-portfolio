import { GithubIcon } from '../icons/github-icon';

import { InstaIcon } from '../icons/insta-icon';

import { LinkedinIcon } from '../icons/link-icon';

import { TwitterIcon } from '../icons/twitter-icon';

import './social-btns.scss';

export function SocialBtns() {
  return (
    <div className='social'>
      <a href='https://www.instagram.com/nathannferreira_/' target='_blank'>
        <InstaIcon />
      </a>

      <a
        href='https://www.linkedin.com/in/nathan-santos-58051b182/'
        target='_blank'
      >
        <LinkedinIcon />
      </a>

      <a href='https://github.com/nathannfs' target='_blank'>
        <GithubIcon />
      </a>

      <a href='' target='_blank'>
        <TwitterIcon />
      </a>
    </div>
  );
}
