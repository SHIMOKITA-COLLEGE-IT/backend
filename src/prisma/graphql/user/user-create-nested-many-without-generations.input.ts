import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGenerationsInput } from './user-create-without-generations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGenerationsInput } from './user-create-or-connect-without-generations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutGenerationsInput {

    @Field(() => [UserCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => UserCreateWithoutGenerationsInput)
    create?: Array<UserCreateWithoutGenerationsInput>;

    @Field(() => [UserCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
