import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsCreateWithoutProfilesOnSkillsInput } from './my-roots-create-without-profiles-on-skills.input';
import { Type } from 'class-transformer';
import { MyRootsCreateOrConnectWithoutProfilesOnSkillsInput } from './my-roots-create-or-connect-without-profiles-on-skills.input';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';

@InputType()
export class MyRootsCreateNestedOneWithoutProfilesOnSkillsInput {

    @Field(() => MyRootsCreateWithoutProfilesOnSkillsInput, {nullable:true})
    @Type(() => MyRootsCreateWithoutProfilesOnSkillsInput)
    create?: MyRootsCreateWithoutProfilesOnSkillsInput;

    @Field(() => MyRootsCreateOrConnectWithoutProfilesOnSkillsInput, {nullable:true})
    @Type(() => MyRootsCreateOrConnectWithoutProfilesOnSkillsInput)
    connectOrCreate?: MyRootsCreateOrConnectWithoutProfilesOnSkillsInput;

    @Field(() => MyRootsWhereUniqueInput, {nullable:true})
    @Type(() => MyRootsWhereUniqueInput)
    connect?: MyRootsWhereUniqueInput;
}
