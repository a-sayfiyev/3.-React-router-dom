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
        border: 1px solid #fffced !important;
        margin-bottom: 10px;
        padding: 0;

        a {
          text-decoration: none;
          color: black;
          display: block;
          padding: 5px 20px;
          background: #fffced;
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

  .logout-btn {
    background-color: #ffec00;
    color: black;
    font-weight: bold;
    border: none;
    padding:5px 15px;
  }

  .logout-btn:hover,
  .logout-btn:active {
    background-color: #df3535;
  }
`;



export default DashboardTemplateWrapper;