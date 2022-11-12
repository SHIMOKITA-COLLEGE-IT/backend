import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firebaseAuthUid = "firebaseAuthUid",
    email = "email",
    disabled = "disabled",
    imageUrl = "imageUrl",
    username = "username",
    firstName = "firstName",
    lastName = "lastName",
    nickName = "nickName",
    showOnlyNickname = "showOnlyNickname",
    birthday = "birthday",
    hideAge = "hideAge",
    position = "position",
    isAlumni = "isAlumni",
    roomNumber = "roomNumber",
    postNumber = "postNumber",
    bio = "bio",
    photoUrls = "photoUrls",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
