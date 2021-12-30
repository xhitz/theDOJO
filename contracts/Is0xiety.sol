// SPDX-License-Identifier: GPL-3.0
//                                                   
//      o        .oPYo.         o          o         
//      8        8  .o8                    8         
//      8 .oPYo. 8 .P'8 `o  o' o8 .oPYo.  o8P o    o 
//      8 Yb..   8.d' 8  `bd'   8 8oooo8   8  8    8 
//      8   'Yb. 8o'  8  d'`b   8 8.       8  8    8 
//      8 `YooP' `YooP' o'  `o  8 `Yooo'   8  `YooP8 
//      ..:.....::.....:..:::..:..:.....:::..::....8 
//      ::::::::::::::::::::::::::::::::::::::::ooP'.
//      ::::::::::::::::::::::::::::::::::::::::...::
//
//
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //                                                                                                                                                                                 //
//      @artist ::          stereoIII6.eth                                                                                                                                          //
//      @msg ::             stereoIII6.eth.chat                                                                                                                                     //
//      @github ::          stereoIII6                                                                                                                                              //
//                                                                                                                                                                                  //
//      @dev ::             stereoIII6.eth                                                                                                                                          //
//      @msg ::             stereoIII6.eth.chat                                                                                                                                     //
//      @github ::          stereoIII6                                                                                                                                              //
//                                                                                                                                                                                  //
//      @author ::          stereoIII6.eth                                                                                                                                          //
//      @msg ::             stereoIII6.eth.chat                                                                                                                                     //
//      @github ::          stereoIII6                                                                                                                                              //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//      @title ::           Is0xiety                                                                                                                                             //
//      @description ::     Decentral Social Network Experiment External Interface                                                                                                                   //
//      @version ::         0.0.1                                                                                                                                                   //
//      @purpose ::         Bring real life into the Blockchain                                                                                                                     //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

pragma solidity ^0.8.0;

interface Is0xiety {

    struct Socio {
        uint256 id;
        address author;
        bool master;
        bool pin;
        uint256 copys;
        address[] ownedBy;
        string title;
        string content;
        address[] likedBy;
        uint256 likes;
    }
    struct Comment {
        uint256 id;
        uint256 sid;
        address author;
        string title;
        string content;
        address[] likedBy;
        uint256 likes;
    }
    struct User {
        uint256 id;
        uint256 cnt;
        uint256 role; // 0 inactive, 1 noob, 2 profiler, 99 admin
        address adr;
        string name;
        string email;
        uint256 likes;
    }
    struct Profile {
        uint256 cnt;
        address adr;
        string avt;
        string cols;
        string fonts;
        uint256 layout;
    }
    function makeUser(
        uint256 _id,
        uint256 _cnt,
        address _adr,
        string memory _name,
        string memory _email
    ) external view returns (bool);

    function makeProfile(
        address _adr,
        string memory _avt,
        string memory _cols,
        string memory _fonts,
        uint256 _layout
    ) external view returns (bool);

    function createSocio(
        uint256 _id,
        bool _master,
        bool _pin,
        uint256 _copys,
        string memory _title,
        string memory _content
    ) external view returns (bool);

    function createComment(
        uint256 _id,
        uint256 _sid,
        string memory _title,
        string memory _content
    ) external view returns (bool);

    function editSocio(
        uint256 _id,
        string memory _title,
        string memory _content
    ) external view returns (bool);

    function editComment(
        uint256 _id,
        string memory _title,
        string memory _content
    ) external view returns (bool);

    function delSocio(uint256 _id) external view returns (bool);

    function delComment(uint256 _id) external view returns (bool);

    function likeSocio(uint256 _id) external view returns (bool);

    function likeComment(uint256 _id) external view returns (bool);
/*
    function showSocio(uint256 _id) external view  returns (Socio memory);

    function showComment(uint256 _id) external view returns (Comment memory);

    function myGraph() external view returns (User memory, Profile memory);

    function lastPosts()
        external view 
        returns (
            Socio memory,
            Socio memory,
            Socio memory
        );

    function lastComments()
        external view 
        returns (
            Comment memory,
            Comment memory,
            Comment memory
        );
*/
    function follow(address _follow) external view  returns (bool);

    function unfollow(address _follow) external view  returns (bool);

    function writeMessage(address _to, string memory _msg)
        external view 
        returns (bool);

    function readMessage(address _from) external view returns (string memory);
}