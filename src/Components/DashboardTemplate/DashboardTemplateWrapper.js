import styled from 'styled-components';

const DashboardTemplateWrapper = styled.section`
  display: flex;
  height: 100vh;

  aside {
    background-color: #fffced;
    width: 300px;
    transition: 0.4s ease;
    overflow: hidden;
    position: relative;
    left: 0;
    padding: 20px;

    .list-group {
      .list-group-item {
        border-radius: 10px;
        border: 1px solid #eee !important;
        margin-bottom: 10px;
        padding: 0;

        a {
          text-decoration: none;
          color: black;
          display: block;
          padding: 5px 20px;
          background-color: #ffdc03;
          border-radius: 10px;
        }
      }
    }
  }

  .rightside {
    flex: 1;
    header {
      p {
        margin: 0;
      }
    }

    main {
    }
  }

  .hide {
    left: -100% !important;
    display: none;
  }

  .site-logo {
    width: 220px;
    margin-bottom: 40px;
  }
`;



export default DashboardTemplateWrapper;