import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationCreateWithoutUsersInput } from './generation-create-without-users.input';
import { Type } from 'class-transformer';
import { GenerationCreateOrConnectWithoutUsersInput } from './generation-create-or-connect-without-users.input';
import { GenerationUpsertWithWhereUniqueWithoutUsersInput } from './generation-upsert-with-where-unique-without-users.input';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';
import { GenerationUpdateWithWhereUniqueWithoutUsersInput } from './generation-update-with-where-unique-without-users.input';
import { GenerationUpdateManyWithWhereWithoutUsersInput } from './generation-update-many-with-where-without-users.input';
import { GenerationScalarWhereInput } from './generation-scalar-where.input';

@InputType()
export class GenerationUpdateManyWithoutUsersNestedInput {

    @Field(() => [GenerationCreateWithoutUsersInput], {nullable:true})
    @Type(() => GenerationCreateWithoutUsersInput)
    create?: Array<GenerationCreateWithoutUsersInput>;

    @Field(() => [GenerationCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => GenerationCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<GenerationCreateOrConnectWithoutUsersInput>;

    @Field(() => [GenerationUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => GenerationUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<GenerationUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [GenerationWhereUniqueInput], {nullable:true})
    @Type(() => GenerationWhereUniqueInput)
    set?: Array<GenerationWhereUniqueInput>;

    @Field(() => [GenerationWhereUniqueInput], {nullable:true})
    @Type(() => GenerationWhereUniqueInput)
    disconnect?: Array<GenerationWhereUniqueInput>;

    @Field(() => [GenerationWhereUniqueInput], {nullable:true})
    @Type(() => GenerationWhereUniqueInput)
    delete?: Array<GenerationWhereUniqueInput>;

    @Field(() => [GenerationWhereUniqueInput], {nullable:true})
    @Type(() => GenerationWhereUniqueInput)
    connect?: Array<GenerationWhereUniqueInput>;

    @Field(() => [GenerationUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => GenerationUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<GenerationUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [GenerationUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => GenerationUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<GenerationUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [GenerationScalarWhereInput], {nullable:true})
    @Type(() => GenerationScalarWhereInput)
    deleteMany?: Array<GenerationScalarWhereInput>;
}
