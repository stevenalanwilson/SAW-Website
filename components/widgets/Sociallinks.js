
import Link from 'next/link'
import theme from '../../styles/theme'

import socaillinksData from '../../config/sociallinkData'

const Sociallinks = () => {
  return (
    <div className='content-box borders bottom three margin-bottom-2'>
      <h2 className='underline'>Links</h2>
      <ul className='menu'>
        {socaillinksData.length > 0 ? socaillinksData.map(link => (
          <li key={link.key}>
            <i className={`fa ${link.class}`} aria-hidden='true' />
            <Link href={link.url} legacyBehavior>
              <a className='socillink'>{link.title}</a>
            </Link>
          </li>
        ))
          : null}
      </ul>
      <style jsx>{`
        ul.menu {
        list-style: none;
        }
        a.socillink {
        margin-left: ${theme.spacing.baseMargin};
        }
        h2.underline {
        border-bottom: 1px solid ${theme.colours.black};
        line-height: 1;
        padding-bottom: ${theme.spacing.basePadding};
        margin-bottom: ${theme.spacing.baseMargin};
        }
      `}
      </style>
    </div>
  );
}
export default Sociallinks
