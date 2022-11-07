import TitleXL from '@/components/common/TitleXL';
import Avatar from '@/components/common/Avatar';

const Header = () => {
  return (
    <nav className="flex justify-between h-14 border-b-2 border-neutral">
      <div className='flex items-center'>
        <TitleXL className="text-primary">Repair Community</TitleXL>
      </div>

      <div className='flex items-center'>
        <Avatar src='https://placeimg.com/192/192/people' className='w-10' />
      </div>
    </nav>
  );
}
export default Header;