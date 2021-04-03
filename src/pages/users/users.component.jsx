import PageContent from '../../components/layouts/page-content.component';
import ContentSection from '../../components/layouts/content-section.component';
import PageHeading from '../../components/page-heading/page-heading.component';

import UserList from '../../components/user-list/user-list.component';

const UsersPage = () => {
  return (
    <PageContent>
      <PageHeading>
        List of Users
        </PageHeading>
      <ContentSection>
        <UserList />
      </ContentSection>
    </PageContent>
  );
}

export default UsersPage;