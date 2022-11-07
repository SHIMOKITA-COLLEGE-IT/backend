import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTagsInput } from './profile-create-without-tags.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTagsInput } from './profile-create-or-connect-without-tags.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileUncheckedCreateNestedManyWithoutTagsInput {

    @Field(() => [ProfileCreateWithoutTagsInput], {nullable:true})
    @Type(() => ProfileCreateWithoutTagsInput)
    create?: Array<ProfileCreateWithoutTagsInput>;

    @Field(() => [ProfileCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutTagsInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Array<ProfileWhereUniqueInput>;
}
