import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutPhotosInput } from './profile-create-without-photos.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutPhotosInput } from './profile-create-or-connect-without-photos.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileUncheckedCreateNestedManyWithoutPhotosInput {

    @Field(() => [ProfileCreateWithoutPhotosInput], {nullable:true})
    @Type(() => ProfileCreateWithoutPhotosInput)
    create?: Array<ProfileCreateWithoutPhotosInput>;

    @Field(() => [ProfileCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutPhotosInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Array<ProfileWhereUniqueInput>;
}
