# codestates-fe-advanced-course
FE 심화 코스 사전 과제

## 완성된 GIF 파일 및 배포 링크
https://lsj135779.github.io/codestates-fe-advanced-course/
  - pagenation, 페이지당 보이는 게시글 수 변경 기능
  
  ![pagenation](https://user-images.githubusercontent.com/78033706/182104780-7a83d1a9-086b-4d7b-aad3-acc034d97d06.gif)
  
  - 검색기능
  
  ![search](https://user-images.githubusercontent.com/78033706/182104830-2f793478-f80b-4d79-8ac4-ed0723e93b4e.gif)
  
  - 상세페이지 이동
  
  ![detailPage](https://user-images.githubusercontent.com/78033706/182104887-142e5900-2354-487b-9ea3-77a836051d31.gif)
  

## 프로젝트 실행 방법
  - git clone을 통해 파일을 받습니다.
  - codestates-fe-advanced-course 폴더로 이동합니다.
  - npm install (npm i) 를 통해 사용한 모듈들을 설치합니다.
  - npm start 로 페이지를 띄웁니다.

## 사용한 스택 목록
  - ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  - ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
  - ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
  - ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 기능 구현 목록과 구현 방법
  ### 필수 구현 사항
  - 100개의 포스트 데이터를 렌더링 하였습니다.
    - axios를 통해서 API를 호출하였고 메인페이지에서 해당 데이터의 userId , title 속성을 사용했습니다.
  - 각 게시물 상세 페이지에는 5개의 댓글 수가 표기되고 게시물 내용의 하단에 댓글이 나열됩니다.
    - post 데이터는 userId , title , body 속성을 사용했고 comment 데이터는 name , body 속성을 사용했습니다.

  ### 추가 구현 사항
  - 메인페이지에서 pagenation을 통해 페이지당 10개의 게시글이 기본으로 보이게 하였습니다.
    - pageNum (페이지당 보이는 게시글 수), page(페이지 값)을 state로 만들어서 모든 post데이터(배열)에서 slice함수를 통해 원하는 데이터만큼 가져와서 사용했습니다.
    ```js
     게시글목록.slice(pageNum * (page - 1), pageNum * page)
    ```
  - 위의 기능과 함께 페이지당 얼만큼의 게시글을 보여줄 지 선택할 수 있는 기능을 만들었습니다.
    - 위에서 사용한 pageNum 을 option태그에서 선택된 값으로 변경하여 해당하는 게시글만큼 가져오게 하였습니다.
  - 검색어를 입력하고 title에 해당 검색어가 있는 게시글들을 가져오는 기능을 만들었습니다.
    - 이 기능을 추가로 만들게 되면서 위에 있는 기능들과 충돌하는 부분이 있었습니다.
    - 기존에 모든 post 데이터에서 위 기능들을 적용하는 것이 아니라 입력한 검색어로 필터한 post 데이터에 적용 시켜야 했습니다.
    - filteredPosts 라는 state값을 사용하여 아래와 같이 적용시켰습니다.
    ```js
      useEffect(() => {
    if (search) {
      setFilteredPosts(posts.filter((post) => post.title.includes(search)));
      setPage(1);
    } else {
      setFilteredPosts(posts);
      setPage(1);
    }
  }, [search, posts, pageNum]);
    ```
    - 검색하는 부분에 아무것도 입력하지 않고 검색버튼을 누르는 경우 전체 post데이터를 가져오는 것으로 적용했습니다.
    
## 추가 개선사항
  - 새로고침시 state가 초기화되는 것을 막기위해 로컬스토리지에 저장하고 사용하는 방법을 생각하였습니다.
  - state 관리를 위해 redux-tookit을 사용하게 되면서 이와 관련된 방법을 찾던 중에 redux-persist 모듈을 알게되었습니다. (적용하는 방법은 추가 학습이 필요해 보입니다.)
  - 기능구현에 초점을 맞추다 보니 디자인이 돋보이지 못했습니다. 애니메이션이나 hover효과등을 적절한 곳에 더 사용해야 할 거 같습니다.
  
## framework
  - figma 링크
  
  https://www.figma.com/file/W1M2TA1jFvImfyFmPAeinW/FE%EC%8B%AC%ED%99%94-%EC%BD%94%EC%8A%A4-%EC%82%AC%EC%A0%84-%EA%B3%BC%EC%A0%9C?node-id=0%3A1
