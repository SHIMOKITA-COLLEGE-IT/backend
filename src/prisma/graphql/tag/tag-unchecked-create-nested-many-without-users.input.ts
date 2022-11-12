import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutUsersInput } from './tag-create-without-users.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutUsersInput } from './tag-create-or-connect-without-users.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [TagCreateWithoutUsersInput], {nullable:true})
    @Type(() => TagCreateWithoutUsersInput)
    create?: Array<TagCreateWithoutUsersInput>;

    @Field(() => [TagCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutUsersInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<TagWhereUniqueInput>;
}
