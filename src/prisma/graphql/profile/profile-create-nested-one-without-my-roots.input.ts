import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMyRootsInput } from './profile-create-without-my-roots.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutMyRootsInput } from './profile-create-or-connect-without-my-roots.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutMyRootsInput {

    @Field(() => ProfileCreateWithoutMyRootsInput, {nullable:true})
    @Type(() => ProfileCreateWithoutMyRootsInput)
    create?: ProfileCreateWithoutMyRootsInput;

    @Field(() => ProfileCreateOrConnectWithoutMyRootsInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutMyRootsInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutMyRootsInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: ProfileWhereUniqueInput;
}
