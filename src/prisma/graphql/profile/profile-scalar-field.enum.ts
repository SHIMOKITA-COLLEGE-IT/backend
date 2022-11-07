import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    userId = "userId",
    username = "username",
    firstName = "firstName",
    lastName = "lastName",
    nickName = "nickName",
    showOnlyNickname = "showOnlyNickname",
    birthday = "birthday",
    hideAge = "hideAge",
    position = "position",
    bio = "bio",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
