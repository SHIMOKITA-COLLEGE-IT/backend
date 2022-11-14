import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationCreateWithoutUsersInput } from './generation-create-without-users.input';
import { Type } from 'class-transformer';
import { GenerationCreateOrConnectWithoutUsersInput } from './generation-create-or-connect-without-users.input';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';

@InputType()
export class GenerationUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [GenerationCreateWithoutUsersInput], {nullable:true})
    @Type(() => GenerationCreateWithoutUsersInput)
    create?: Array<GenerationCreateWithoutUsersInput>;

    @Field(() => [GenerationCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => GenerationCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<GenerationCreateOrConnectWithoutUsersInput>;

    @Field(() => [GenerationWhereUniqueInput], {nullable:true})
    @Type(() => GenerationWhereUniqueInput)
    connect?: Array<GenerationWhereUniqueInput>;
}
